using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using System.Xml;
using Sys;
using Utility;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;
using System.Text;

namespace SKISAJAXService.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" }; //["value1","value2"]
        }

        // 依request回傳資料
        public string Get(string Comp, string Cosy, string Sett)
        {

            //return "value";
            string sXML = "";
            string sJSON = "";
            XmlDocument oDocument = new XmlDocument();
            try
            {

                // 取得庫存資訊
                PositionMgmt oPositionMgmt = new PositionMgmt();
                sXML = oPositionMgmt.GetPositionInfo(Comp, Cosy, Sett);
                sXML = "<TARoot>";
                sXML += "<TAStatus code=\"0\" count=\"" + oPositionMgmt.Count + "\" date=\"" + oPositionMgmt.Date + "\" time=\"" + oPositionMgmt.Time + "\"/>";
                sXML += "<SBBPOSITS>" + oPositionMgmt.XMLINFO + "</SBBPOSITS>";
                sXML += "</TARoot>";

                // 將 XML 轉換成 JSON 格式
                JSON oJSON = new JSON();
                sJSON = oJSON.XMLToJSON(sXML);
            }
            catch (Exception ex)
            {
                Console.WriteLine("PositionController.Index(): " + ex.Message);
            }

            var result = new
            {
                UserName = "Michael",
                City = "Taipei"
            };

            return sJSON;

        }
        
        //以手動方式決定回傳的資料
        public HttpResponseMessage Get(string Comp, string Cosy, string Sett, string tmp)
        {

            //return "value";
            string sXML = "";
            string sJSON = "";
            XmlDocument oDocument = new XmlDocument();
            try
            {

                // 取得庫存資訊
                PositionMgmt oPositionMgmt = new PositionMgmt();
                sXML = oPositionMgmt.GetPositionInfo(Comp, Cosy, Sett);
                sXML = "<TARoot>";
                sXML += "<TAStatus code=\"0\" count=\"" + oPositionMgmt.Count + "\" date=\"" + oPositionMgmt.Date + "\" time=\"" + oPositionMgmt.Time + "\"/>";
                sXML += "<SBBPOSITS>" + oPositionMgmt.XMLINFO + "</SBBPOSITS>";
                sXML += "</TARoot>";

                // 將 XML 轉換成 JSON 格式
                JSON oJSON = new JSON();
                sJSON = oJSON.XMLToJSON(sXML);
            }
            catch (Exception ex)
            {
                Console.WriteLine("PositionController.Index(): " + ex.Message);
            }

            var result = new
            {
                UserName = "Michael",
                City = "Taipei"
            };

            // 會work
            var resp = new HttpResponseMessage(HttpStatusCode.OK);
            resp.Content = new StringContent(sJSON, Encoding.UTF8, "text/json");
            return resp;
        }
        
        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}