namespace BombQuestionnaire.Components;

public partial class Likert : Grid
{
	public Likert()
	{
		InitializeComponent();
	}

	public static readonly BindableProperty TextProperty = BindableProperty.Create(
		nameof(Text), typeof(string), typeof(Likert), propertyChanged: (bindable, oldValue, newValue) =>
		{
			var control = (Likert)bindable;
			control.QuestionLabel.Text = (string)newValue;
		});

    public static readonly BindableProperty NumberProperty = BindableProperty.Create(
        nameof(Number), typeof(int), typeof(Likert), propertyChanged: (bindable, oldValue, newValue) =>
        {
            var control = (Likert)bindable;
        });

    public string Text
	{
		get => (string)GetValue(TextProperty);
		set => SetValue(TextProperty, value);
	}

	public int Number
	{
		get => (int)GetValue(NumberProperty);
		set => SetValue(NumberProperty, value);
	}
}