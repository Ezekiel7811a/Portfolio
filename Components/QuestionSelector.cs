using BombQuestionnaire.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BombQuestionnaire.Components
{
    public class QuestionSelector : DataTemplateSelector
    {
        public DataTemplate Default { get; set; }
        public DataTemplate LikertTemplate { get; set; }
        public DataTemplate LikertMultipleTemplate { get; set; }
        protected override DataTemplate OnSelectTemplate(object item, BindableObject container)
        {
            var question = (Question)item;
            switch (question.Type)
            {
                case nameof(LikertQuestion):
                    return LikertTemplate;
                case nameof(LikertMultipleQuestion):
                    return LikertMultipleTemplate;
                default:
                    return Default;
            }
        }
    }
}
