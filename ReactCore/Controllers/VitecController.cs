using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers
{
    [Route("api/Vitec")]
    [ApiController]
    public class VitecController : ControllerBase
    {
        private readonly Data fData = new Data();
        // GET: api/Vitec
        [HttpGet]
        public IEnumerable<string> Get()
        {
            //Data.GetVitecDynamicData("/User/GetUser?UserId=" + "CANVANDARE4AE1UTFRNK2CPKMS" + "&CustomerId=" + "S31412");
            return new string[] { "value1", "value2" }; 
        }

        // GET: api/Vitec/5
      
        [HttpGet("User/{GetUser}/{UserId}/{CustomerId}", Name = "GetUser")]
        public IActionResult GetUser(string User,string GetUser, string UserId, string CustomerId)
        {
           
            var data= fData.GetVitecData($"/User/{GetUser}?UserId="+ UserId + "&CustomerId="+CustomerId);
            if (data == "") return NotFound();
            return Ok(data);
        }
      
        [HttpGet("Office/{GetOffice}/{CustomerId}", Name = "GetOffice")]
        public IActionResult GetOffice(string GetOffice, string UserId, string CustomerId)
        {

            var data = fData.GetVitecData($"/Office/{GetOffice}?CustomerId={CustomerId}");
            if (data == "") return NotFound();
            return Ok(data);
        }
        //string url = "/Office/GetOffice?customerId=" + customerId;
        [HttpGet("Estate/{urlSecondPart}/{estateId}/{CustomerId}", Name = "GetEstate")]
        public IActionResult GetEstate(string urlSecondPart, string estateId, string CustomerId)
        {

            var data = fData.GetVitecData($"/Estate/{urlSecondPart}?estateId={estateId}&CustomerId={CustomerId}");
            if (data == "") return NotFound();
            return Ok(data);

        }
        //GetVitecBroker(string userId, string customerId)
        // GetVitecEstate(string estateId, string estateType, string customerId) string url = "/Estate/" + urlSecondPart + "estateId=" + estateId + "&customerId=" + customerId;
        // GetVitecOffice(string customerId) string url = "/Office/GetOffice?customerId=" + customerId;

        //[HttpGet("{User}/{UserId}/{CustomerId}", Name = "Get")]
        //public string Get(string User, string UserId, string CustomerId)
        //{

        //    return Data.GetVitecDynamicData($"/{User}/GetUser?UserId=" + UserId + "&CustomerId=" + CustomerId);
        //}

        // POST: api/Vitec
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Vitec/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
