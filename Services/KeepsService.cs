using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;
        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }
        public IEnumerable<Keep> Get()
        {
            return _repo.Get();
        }

        internal Keep Get(int id)
        {
            Keep found = _repo.Get(id);
            if (found == null)
            {
                throw new Exception("Invailid Id");
            }
            return found;
        }

        public Keep Create(Keep newKeep)
        {
            return _repo.Create(newKeep);
        }
        internal Keep Edit(Keep updatedKeep)
        {
            Keep found = Get(updatedKeep.Id);
            if (found.UserId != updatedKeep.UserId)
            {
                throw new Exception("Invalid Request");
            }
            found.Views = updatedKeep.Views;
            found.Shares = updatedKeep.Shares;
            found.Keeps = updatedKeep.Keeps;
            found.IsPrivate = updatedKeep.IsPrivate;
            found.Name = updatedKeep.Name;
            found.Description = updatedKeep.Description;
            _repo.Edit(found);
            return found;
        }

        internal Keep Delete(int id, string userId)
        {
            Keep found = Get(id);
            if (found.UserId != userId)
            {
                throw new Exception("Invaild Request");
            }
            if (_repo.Delete(id))
            {
                return found;

            }
            throw new Exception("Something went wrong! The attempt to delete that keep was unsuccessfull.");
        }

        internal IEnumerable<Keep> GetKeepsByVaultId(int id)
        {
            return _repo.GetKeepsByVaultId(id);
        }

    }
}