using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;

namespace ReactCore.Controllers
{
    internal class Data
    {
        // HttpClientInstance ska deklareras som en singleton
        public static readonly HttpClient HttpClientInstance = new HttpClient
        {
            BaseAddress = new Uri("http://connect.qa01.maklare.vitec.net"),
            DefaultRequestHeaders = {
                Authorization = new AuthenticationHeaderValue("Basic NjY6WVNWa2pFdVFhOUxzQ29ENVVJY0I3S09tMGhIRVFMU0R5MU83ZDFtbEZmOXJOM0tpZlhQUlVOcUQzaGsydmd5RQ==")
          }
        };

        internal static async System.Threading.Tasks.Task<string[]> GetVitecDataAsync()
        {
            using (var response = await HttpClientInstance.GetAsync("User/GetUser?UserId=StringValue&SearchText=StringValue&CustomerId=StringValue"))
            {
                if (response.StatusCode == HttpStatusCode.Unauthorized)
                {
                    // Authorization headern är inte korrekt
                }
                if (response.StatusCode == HttpStatusCode.Forbidden)
                {
                    // Begärt data som det saknas åtkomst till
                }
                if (response.StatusCode == HttpStatusCode.InternalServerError)
                {
                    // Oväntat fel, kontakta Vitec
                }
                //if (response.StatusCode == HttpStatusCode.BadRequest)
                //{
                //    var json = await response.Content.ReadAsStringAsync();
                //    var result = JsonConvert.DeserializeObject<dynamic>(json);
                //    // Hantera valideringsfel, presenteras i resultatet
                //}

                var json = await response.Content.ReadAsStringAsync();
                // JsonConvert finns i biblioteket Newtonsoft.Json
                var result = JsonConvert.DeserializeObject<dynamic>(json);

                var firstInArray = result[0];
                var archived = firstInArray.archived.Value;
                // TODO: Gör något med resultatet
                return result;
            }
            
        }
    }
}