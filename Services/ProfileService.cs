using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
    public class ProfileService
    {
        private readonly ProfileRepository _repo;
        public ProfileService(ProfileRepository repo)
        {
            _repo = repo;
        }
        // Get Profile
        public IEnumerable<Profile> Get(string userId)
        {
            return _repo.Get(userId);
        }

        // Get Profile By Id
        internal Profile Get(int id)
        {
            Profile found = _repo.Get(id);
            if (found == null)
            {
                throw new Exception("Invailid Id");
            }
            return found;
        }

        // Create Proifle 
        public Profile Create(Profile newProfile)
        {
            return _repo.Create(newProfile);
        }

        // Edit Profile
        internal Profile Edit(Profile updatedProfile)
        {
            Profile found = Get(updatedProfile.Id);
            if (found.UserId != updatedProfile.UserId)
            {
                throw new Exception("Invailid Request");
            }
            found.Name = updatedProfile.Name;
            found.Description = updatedProfile.Description;
            found.Img = updatedProfile.Img;
            _repo.Edit(found);
            return found;
        }

        //    Delete Profile
        internal Profile Delete(int id, string UserId)
        {
            Profile found = Get(id);
            if (found.UserId != UserId)
            {
                throw new Exception("Invailid Request");

            }
            if (_repo.Delete(id))
            {
                return found;
            }
            throw new Exception("Something went wrong! The attempt to delete your profile was unsucessful.");
        }
    }
}