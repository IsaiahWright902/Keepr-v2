using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
    public class VaultsRepository
    {
        private readonly IDbConnection _db;
        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }
        // Get Vault
        internal IEnumerable<Vault> Get(string UserId)
        {
            string sql = "SELECT * FROM vaults WHERE userId = @UserId;";
            return _db.Query<Vault>(sql, new { UserId });
        }
        // Get Vault by Id
        internal Vault Get(int Id)
        {
            string sql = "SELECT * FROM vaults WHERE id = @Id";
            return _db.QueryFirstOrDefault<Vault>(sql, new { Id });
        }
        // Create Vault
        internal Vault Create(Vault newVault)
        {
            string sql = @"
            INSERT INTO vaults
            (Name, Description, UserId)
            VALUES
            (@Name, @Description, @UserId);
            SELECT LAST_INSERT_ID()";
            newVault.Id = _db.ExecuteScalar<int>(sql, newVault);
            return newVault;
        }
        // Delete Vault
        internal bool Delete(int Id)
        {
            string sql = "DELETE FROM vaults WHERE id = @Id LIMIT 1";
            int removed = _db.Execute(sql, new { Id });
            return removed == 1;
        }
    }
}