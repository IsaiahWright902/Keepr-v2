using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Keepr.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VaultsController : ControllerBase
    {
        private readonly VaultsService _vs;
        private readonly KeepsService _ks;
        public VaultsController(VaultsService vs, KeepsService ks)
        {
            _vs = vs;
            _ks = ks;
        }
        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<Vault>> Get()
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_vs.Get(userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            };
        }

        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<Vault> Get(int id)
        {
            try
            {
                return Ok(_vs.Get(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        // Get Keeps by Vault Id
        [HttpGet("{id}/keeps")]
        [Authorize]
        public ActionResult<IEnumerable<Keep>> GetKeepsByVaultId(int id)
        {
            try
            {
                return Ok(_ks.GetKeepsByVaultId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Authorize]
        public ActionResult<Vault> Post([FromBody] Vault newVault)
        {
            try
            {
                var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                newVault.UserId = userId;
                return Ok(_vs.Create(newVault));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpDelete("{id}")]
        [Authorize]
        public ActionResult<Vault> Delete(int id)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_vs.Delete(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



    }
}