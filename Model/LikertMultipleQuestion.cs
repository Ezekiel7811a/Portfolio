using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BombQuestionnaire.Model
{
    public class LikertMultipleQuestion : LikertQuestion
    {
        public LikertMultipleQuestion(string text, List<Option> options, List<LikertQuestion> likerts) : base(text, options)
        {
            Options = options;
            Text = text;
            Likerts = likerts;
            Type = nameof(LikertMultipleQuestion);
        }

        public List<LikertQuestion> Likerts { get; set;}
    }
}
