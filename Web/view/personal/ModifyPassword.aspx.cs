﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using TKS.FAS.BLL;

public partial class view_personal_ModifyPassword : BasePage
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    bool PassStrongCheck(string pass)
    {
        var regex = new Regex(@"
(?=.*[0-9])                     #必须包含数字
(?=.*[a-zA-Z])                  #必须包含小写或大写字母

.{6,16}                         #至少6个字符，最多16个字符
", RegexOptions.Multiline | RegexOptions.IgnorePatternWhitespace);

        return regex.IsMatch(pass);


    }

    protected void btnOK_Click(object sender, EventArgs e)
    {


        if (string.IsNullOrEmpty(txtPassword1.Value) || string.IsNullOrEmpty(txtPassword2.Value))
        {
            lblError.InnerText = "请填写密码";
            return;
        }
        if (txtPassword1.Value.Length < 6 || txtPassword1.Value.Length > 16)
        {
            lblError.InnerText = "密码必须6到16个字符";
            return;
        }
        if (txtPassword1.Value != txtPassword2.Value)
        {
            lblError.InnerText = "密码不一致";
            return;
        }


        if (!PassStrongCheck(txtPassword1.Value))
        {

            lblError.InnerText = "密码必须包含数字、小写或大写字母";
            return;
        }
      

        UserBLL bll = new UserBLL();
        var res = bll.ModifyPassByUser(Token, txtPassword1.Value);
        if (res.IsSuccess == true)
        {
            lblError.InnerText = "修改成功，请重新登陆";
        }
        else
        {
            lblError.InnerText = res.Message;
            return;
        }


    }
}