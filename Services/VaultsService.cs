using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;
        public VaultsService(VaultsRepository repo)
        {
            _repo = repo;
        }
        // Get Vaults
        public IEnumerable<Vault> Get(string userId)
        {
            return _repo.Get(userId);
        }

        // Get Vaults by Id
        internal Vault Get(int id)
        {
            Vault found = _repo.Get(id);
            if (found == null)
            {
                throw new Exception("Invaild Id");
            }
            return found;
        }
        // Create Vault
        public Vault Create(Vault newVault)
        {
            return _repo.Create(newVault);
        }



        //  Delete Vault
        internal Vault Delete(int id, string userId)
        {
            Vault found = Get(id);
            if (found.UserId != userId)
            {
                throw new Exception("Invaild Request");
            }
            if (_repo.Delete(id))
            {
                return found;
            }
            throw new Exception("This Keep was not able to be deleted.");
        }

    }
}