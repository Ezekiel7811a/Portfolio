using BombQuestionnaire.Model;

namespace BombQuestionnaire.Components;

public partial class LikertMultiple : Grid
{
	public LikertMultiple()
	{
		InitializeComponent();
		OptionsLabels.ItemsSource = Options;
        VerticalStackButtons.ItemsSource = Rows;
        //RadioButtons = (CollectionView)VerticalStackButtons.ItemTemplate.Values;
        //RadioButtons.ItemsSource = Rows;
        /*for (int i = 0; i < numberOfRows; i++)
        {
            myGrid.RowDefinitions.Add(new RowDefinition() { });
        }
        for (int i = 0; i < numberOfColumns; i++)
        {
            myGrid.ColumnDefinitions.Add(new ColumnDefinition() { });
        }

        foreach (var column in myGrid.ColumnDefinitions)
        {
            column.SetValue()
        }*/

	}

    public CollectionView RadioButtons;

	public static readonly BindableProperty OptionsProperty = BindableProperty.Create(
		nameof(Options), typeof(List<Option>), typeof(LikertMultiple), propertyChanged: (bindable, oldValue, newValue) =>
        {
            var control = (LikertMultiple)bindable;
			control.OptionsLabels.ItemsSource = (List<Option>)newValue;
        });

    public static readonly BindableProperty RowsProperty = BindableProperty.Create(
        nameof(Rows), typeof(List<LikertQuestion>), typeof(LikertMultiple), propertyChanged: (bindable, oldValue, newValue) =>
        {
            var control = (LikertMultiple)bindable;
            control.VerticalStackButtons.ItemsSource = (List<LikertQuestion>)newValue;
            //control.RadioButtons.ItemsSource = (List<LikertQuestion>)newValue;
        });

    public List<Option> Options
	{
		get => (List<Option>)GetValue(OptionsProperty);
		set => SetValue(OptionsProperty, value);
	}

    public List<LikertQuestion> Rows
    {
        get => (List<LikertQuestion>)GetValue(OptionsProperty);
        set => SetValue(OptionsProperty, value);
    }

    public int NumberOfRows => Rows.Count + 1;
    public int NumberOfColumns => Options.Count + 1;
}