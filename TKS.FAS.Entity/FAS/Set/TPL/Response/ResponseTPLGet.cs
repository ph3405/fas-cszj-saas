﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TKS.FAS.Entity.FAS
{
    public class ResponseTPLGet : ResponseBase
    {
        public TKS_FAS_DocTPL Head { get; set; }

        public List<TKS_FAS_DocDetailTPL> Detail { get; set; }

        public string CheckParent { get; set; }
    }
}
