using BombQuestionnaire.Components;
using BombQuestionnaire.Model;

namespace BombQuestionnaire.ModelView
{
    public partial class QuestionnaireViewModel : BaseViewModel
    {
        public QuestionnaireViewModel()
        {
            options = new List<Option>
            {
                new Option("Not at all anxious"),
                new Option("A little anxious"),
                new Option("Moderately anxious"),
                new Option("Very anxious"),
                new Option("Extremely anxious")
            };

            likerts = new List<LikertQuestion>
            {
                new LikertQuestion("How anxious I feel at the moment", options),
                new LikertQuestion("I feel upset", options)
            };

            Title = "Questionnaire";
            Questions = new List<Question> {
                new LikertQuestion("How anxious I feel at the moment", options),
                new LikertQuestion("I feel upset", options),
                new LikertMultipleQuestion("Multiple", options, likerts)
            };
        }

        [ObservableProperty]
        List<Question> questions;

        List<Option> options;
        List<LikertQuestion> likerts;
    }
}
