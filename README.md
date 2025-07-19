# Google Dork Generator Tool

## Steps to use

- Navigate to [Google Dork Generator Tool](https://google-search-tool.netlify.app/)
- Fill in details that need to be searched
- Click on result to copy the query
- Paste into _Google_ search box to execute

## Available fields

- **`Exact Text`** - The text that needs to be searched.
- **`Negative Word`** - The words that need to be excluded from search results.
- **`Exact Word`** - Any additional words that need to be included in search results.
- **`In URL Text`** - Words included in the URL.
- **`In Title Text`** - Words included in the title bar of website.
- **`Website`** - Website to which search results need to be narrowed down. (_Format:_ `website.com`)
- **`File Type`** - Type of file that need to be shown in search results.
- **`Date Before`** - Date before which the results need to be shown. (_Format:_ YYYY-MM-DD)
- **`Date After`** - Date after which the results need to be shown. (_Format:_ YYYY-MM-DD)

## Additional notes

- `AND` operator can be used to logical connect one or more fields. For logical AND, `AND` or `&` can be used in fields.
- `OR` operator can be used to logical connect one or more fields. For logical OR, `OR` or `|` can be used in fields.
- Complex fileds or any other fields which are not mentioned can be used in the Others field and `()` can be used to create logical blocks.
