﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TKS.FAS.Entity.SSO 
{
    public class RequestUserGet:RequestBase
    {
        public TKS_FAS_UserExt Data { get; set; }
    }
}
