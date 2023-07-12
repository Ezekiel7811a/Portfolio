using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BombQuestionnaire.Model
{
    public class Option
    {
        public Option(string name) 
        {
            Name = name;
        }
        public string Name { get; set; }
    }
}
