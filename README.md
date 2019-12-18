## Navbar

Generic Navigation bar component that gets its description from props

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**items** | `Array[]<Shape>` |  | :white_check_mark: | The list of items to display in the navigation bar
**items[].icon** | `ReactElement` |  | :x: | The Icon component
**items[].label** | `String` |  | :x: | The label of the navigation item
**items[].path** | `String` |  | :x: | The path/URL to the target
**items[].tooltip** | `String` |  | :x: | The tooltip/abbreviation to display upon hovering the navigation item

