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
        private string username = "66";
        private string password= "YSVkjEuQa9LsCoD5UIcB7KOm0hHEQLSDy1O7d1mlFf9rN3KifXPRUNqD3hk2vgyE";
        private string vitecUrl = "http://connect.qa01.maklare.vitec.net";

        //private string username2 = "provider@mspecs.se";
        //private string password2 = "Tomat30";
        //private string Mspecs = "https://demo.mspecs.se";
        //private string MspecsToken = "c886d31b48cd4bc5357d2d4675807d10e4ad261d764cfc094850d9ef4bec8317fc1f29336e1f2812d6e412715339f4654081";

        internal string GetVitecData(string url)
        {
            string Json = "";
            try
            {
                WebRequest myReq = null;
                url = vitecUrl + url;
                myReq = WebRequest.Create(url);
                string usernamePassword = username + ":" + password;
                CredentialCache mycache = new CredentialCache { { new Uri(url), "Basic", new NetworkCredential(username, password) } };
                myReq.Credentials = mycache;
                myReq.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(new ASCIIEncoding().GetBytes(usernamePassword)));

                WebResponse wr = myReq.GetResponse();
                Stream receiveStream = wr.GetResponseStream();
                if (receiveStream != null)
                {
                    StreamReader reader = new StreamReader(receiveStream, Encoding.UTF8);
                    string content = reader.ReadToEnd();

                    Json = content;// JsonConvert.DeserializeObject(content);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }

            return Json;
        }
       
    }
}