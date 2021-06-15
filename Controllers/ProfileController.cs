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
    public class ProfileController : ControllerBase
    {
        private readonly ProfileService _ps;
        public ProfileController(ProfileService ps)
        {
            _ps = ps;
        }

        // Get Profile
        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<Profile>> Get()
        {
            try
            {
             string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
             return Ok(_ps.Get(userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        // Get Profile By Id
        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<Profile> Get(int id)
        {
            try
            {
                return Ok(_ps.Get(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // Post Profile
        [HttpPost]
        [Authorize]
        public ActionResult<Profile> Post([FromBody] Profile newProfile)
        {
            try
            {
                var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                newProfile.UserId = userId;
                return Ok(_ps.Create(newProfile));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // Edit Profile
        [HttpPut("{id}")]
        [Authorize]
        public ActionResult<Profile> Edit(int id, [FromBody] Profile updatedProfile)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                updatedProfile.UserId = userId;
                updatedProfile.Id = id;
                return Ok(_ps.Edit(updatedProfile));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        // Delete Profile
        [HttpDelete("{id}")]
        [Authorize]
        public ActionResult<Profile> Delete(int id)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_ps.Delete(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}