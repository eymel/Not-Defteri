using _00_BusinessLayer;
using _00_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class LoginController : ApiController
    {
        UserBusiness uBll = new UserBusiness();
       public IHttpActionResult Register(User user)
        {
            return Ok();
        }
        public IHttpActionResult dologin(string username,string password)
        {
            User result= uBll.Login(username,password);
            if (result!=null)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }



    }
}
