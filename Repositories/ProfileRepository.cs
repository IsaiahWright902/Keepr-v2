using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
    public class ProfileRepository
    {
        private readonly IDbConnection _db;
        public ProfileRepository(IDbConnection db)
        {
            _db = db;
        }

        // Get Profile
        internal IEnumerable<Profile> Get(string UserId)
        {
            string sql = "SELECT * FROM profile WHERE userId = @UserId;";
            return _db.Query<Profile>(sql, new { UserId });
        }

        // Get Profile By Id 
        internal Profile Get(int Id)
        {
            string sql = "SELECT * FROM profile WHERE id = @Id";
            return _db.QueryFirstOrDefault<Profile>(sql, new { Id });
        }

        // Create Profile
        internal Profile Create(Profile newProfile)
        {
            string sql = @"
            INSERT INTO profile
            (Name, Description, UserId, Img)
            VALUES
            (@Name, @Description, @UserId, @Img);
            SELECT LAST_INSERT_ID()";
            newProfile.Id = _db.ExecuteScalar<int>(sql, newProfile);
            return newProfile;
        }

        // Edit Profle
        internal void Edit(Profile updatedProfile)
        {
            string sql = @"
            UPDATE profile
            SET
            name = @Name,
            description = @Description,
            img = @Img
            WHERE id = @id
            ";
            _db.Execute(sql, updatedProfile);


        }

        // Delete Profile
        internal bool Delete(int Id)
        {
            string sql = "DELETE FROM profile WHERE id = @Id LIMIT 1";
            int removed = _db.Execute(sql, new { Id });
            return removed == 1;
        }
    }

}