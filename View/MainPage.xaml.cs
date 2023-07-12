using BombQuestionnaire.ModelView;

namespace BombQuestionnaire.View;

public partial class MainPage : ContentPage
{
	public MainPage(QuestionnaireViewModel viewModel)
	{
		InitializeComponent();
		BindingContext = viewModel;
	}
}

