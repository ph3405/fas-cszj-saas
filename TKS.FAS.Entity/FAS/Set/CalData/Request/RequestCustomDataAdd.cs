﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TKS.FAS.Entity.FAS
{
    public class RequestCustomDataAdd:RequestBase
    {
        public TKS_FAS_CaculateHelperItem Head { get; set; }

        

        public List<CodeValue> Data { get; set; }
    }
}
