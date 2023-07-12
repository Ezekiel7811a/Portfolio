using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BombQuestionnaire.Model
{
    public class LikertQuestion : Question
    {
        public LikertQuestion(string text, List<Option> options) 
        {
            Options = options;
            Text = text;
            Type = nameof(LikertQuestion);
        }
        public List<Option> Options { get; set; }
        public int NumberOfOptions => Options.Count;
    }
}
