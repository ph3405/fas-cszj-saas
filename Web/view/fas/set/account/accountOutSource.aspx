﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="accountOutSource.aspx.cs" Inherits="view_fas_set_accountOutSource" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>外包</title>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="../../../../layui/css/layui.css" media="all" />
    <style type="text/css">
      
    </style>
</head>
<body class="childrenBody">
    <form id="editForm" class="layui-form" style="width: 80%;">
        <script id="tpl-Edit" type="text/x-jsrender">
             <div class="layui-form-item">
                <label class="layui-form-label">账套外包</label>
                <div class=" layui-input-inline">
                    <input type="text" id="txtSupplierId" class="layui-input  layui-hide" value="{{:WB_CreditCode}}" name="WB_CreditCode" lay-verify="required" placeholder="">
                    <input type="text" id="txtSupplierName" class="layui-input  layui-disabled"  disabled value="{{:SupplierName}}" name="SupplierName" lay-verify="required" placeholder="">
                      </div>
                  <i id="btnSupplierChoose" class="layui-icon layui-btn">&#xe615;</i> 
            </div>
          
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit="" lay-filter="save">启用外包</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                </div>
            </div>

        </script>

    </form>
    <script>
        var token = '<%=Token%>';
    </script>
    <script type="text/javascript" src="../../../../layui/layui.js"></script>
 
    <script type="text/javascript" src="accountOutSource.js"></script>
</body>
</html>
