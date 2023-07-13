using BombQuestionnaire.Model;
using Microsoft.Extensions.Logging;

namespace BombQuestionnaire.Components;

public partial class LikertMultiple : Grid
{
	public LikertMultiple()
	{
		InitializeComponent();
		OptionsLabels.ItemsSource = Options;
        VerticalStackButtons.ItemsSource = Rows;

        Label text1 = new Label();
        text1.Text = "Test";
        myGrid.SetColumn(text1, 1);
        myGrid.SetRow(text1, 1);

        //Add to the grid children collection
        myGrid.Children.Add(text1);
    }

    public List<ColumnDefinition> columns { get; set; }
    public List<RowDefinition> rows { get; set; }

	public static readonly BindableProperty OptionsProperty = BindableProperty.Create(
		nameof(Options), typeof(List<Option>), typeof(LikertMultiple), propertyChanged: (bindable, oldValue, newValue) =>
        {
            var control = (LikertMultiple)bindable;
			control.OptionsLabels.ItemsSource = (List<Option>)newValue;

            control.columns = new List<ColumnDefinition>();
            for (int i = 0; i < control.NumberOfColumns; i++)
            {
                ColumnDefinition col = new ColumnDefinition();
                control.columns.Add(col);
                control.myGrid.ColumnDefinitions.Add(col);
            }
        });

    public static readonly BindableProperty RowsProperty = BindableProperty.Create(
        nameof(Rows), typeof(List<LikertQuestion>), typeof(LikertMultiple), propertyChanged: (bindable, oldValue, newValue) =>
        {
            var control = (LikertMultiple)bindable;
            control.VerticalStackButtons.ItemsSource = (List<LikertQuestion>)newValue;

            control.rows = new List<RowDefinition>();
            for (int i = 0; i < control.NumberOfRows; i++)
            {
                RowDefinition row = new RowDefinition();
                control.rows.Add(row);
                control.myGrid.RowDefinitions.Add(row);
            }
        });

    public List<Option> Options
	{
		get => (List<Option>)GetValue(OptionsProperty);
		set => SetValue(OptionsProperty, value);
	}

    public List<LikertQuestion> Rows
    {
        get => (List<LikertQuestion>)GetValue(RowsProperty);
        set => SetValue(RowsProperty, value);
    }

    public int NumberOfRows => Rows.Count + 1;
    public int NumberOfColumns => Options.Count + 1;
}