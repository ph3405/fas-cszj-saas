﻿<%@ WebHandler Language="C#" Class="FileHandler" %>

using System;
using System.Collections;
using System.Data;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using System.Web.SessionState;
using System.Drawing;
using System.IO;
using TKS.FAS.BLL.FAS;

public class FileHandler : IHttpHandler, IRequiresSessionState
{
    public static string ImgPath = Convert.ToString(System.Configuration.ConfigurationManager.AppSettings["IMGPATH"]);
    public void ProcessRequest(HttpContext context)
    {

        try
        {

            HttpPostedFile file = context.Request.Files["Filedata"]; //上传文件
            string invoiceId = context.Request.Form["invoiceId"];

            Guid fileguid = Guid.NewGuid(); //生成新的文件名 不包含.和后缀名
            string newfilename = Guid.NewGuid().ToString("N");
            // string uploadPath = HttpContext.Current.Server.MapPath(@context.Request["folder"]) + "uploadPic\\";
            // string uploadPath = HttpContext.Current.Server.MapPath("yxuploadfile/product/original") + "\\";
            string uploadPath = HttpContext.Current.Server.MapPath("/uploadPic/");
            if (file != null)
            {
                string extension = Path.GetExtension(file.FileName);
                newfilename += extension;

                var user = SessionHelper.GetUserInfo();
                string xdpath = "/uploadPic/" + "发票/" + DateTime.Now.Year + "-" + DateTime.Now.Month  + "-" + DateTime.Now.Day+ "/";
                //string xdpath = "/发票/" + DateTime.Now.Year + "-" + DateTime.Now.Month  + "-" + DateTime.Now.Day+ "/";
                uploadPath += "发票\\" + DateTime.Now.Year + "-" + DateTime.Now.Month + "-" + DateTime.Now.Day + "\\";

                //判断路径是否存在
                if (!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }

                uploadPath += newfilename;


                file.SaveAs(uploadPath);
                xdpath += newfilename;

                FPFJBLL bll = new FPFJBLL();
                var res = bll.FPFJAdd(new TKS.FAS.Entity.FAS.RequestFPFJAdd
                {
                    Token = user.Token,
                    Data = new TKS.FAS.Entity.TKS_FAS_InvoiceAttach
                    {
                        Title = file.FileName,
                        InvoiceId = invoiceId,
                        Path = xdpath
                    }
                });


                //下面这句代码缺少的话，上传成功后上传队列的显示不会自动消失
                context.Response.Write("1");



            }
        }
        catch (Exception ex)
        {
            context.Response.Write("0");
        }
        finally
        {
            GC.Collect();
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}