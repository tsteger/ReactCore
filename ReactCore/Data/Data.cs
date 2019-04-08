using Newtonsoft.Json;
using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace ReactCore.Controllers
{
    internal class Data
    {
       
      

        
        internal static dynamic GetVitecDynamicData(string url)
        {
            dynamic dynJson = string.Empty;
            try
            {
                WebRequest myReq = null;
                url = "http://connect.qa01.maklare.vitec.net" + url;
                myReq = WebRequest.Create(url);
                string usernamePassword = "66" + ":" + "YSVkjEuQa9LsCoD5UIcB7KOm0hHEQLSDy1O7d1mlFf9rN3KifXPRUNqD3hk2vgyE";
                CredentialCache mycache = new CredentialCache { { new Uri(url), "Basic", new NetworkCredential("66", "YSVkjEuQa9LsCoD5UIcB7KOm0hHEQLSDy1O7d1mlFf9rN3KifXPRUNqD3hk2vgyE") } };
                myReq.Credentials = mycache;
                myReq.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(new ASCIIEncoding().GetBytes(usernamePassword)));

                WebResponse wr = myReq.GetResponse();
                Stream receiveStream = wr.GetResponseStream();
                if (receiveStream != null)
                {
                    StreamReader reader = new StreamReader(receiveStream, Encoding.UTF8);
                    string content = reader.ReadToEnd();

                    dynJson = content;// JsonConvert.DeserializeObject(content);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
            
            return dynJson;
        }
    }
}