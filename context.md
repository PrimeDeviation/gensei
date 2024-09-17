# Gensei Coding Conventions and Project Consistency Guidelines

## General Guidelines

1. Use meaningful and descriptive names for variables, functions, and classes.
2. Follow the DRY (Don't Repeat Yourself) principle.
3. Write self-documenting code where possible, with comments for complex logic.
4. Keep functions small and focused on a single task.
5. Use version control (Git) effectively with meaningful commit messages.

## Naming Conventions

1. Use camelCase for variable and function names in JavaScript.
2. Use PascalCase for class names in JavaScript.
3. Use snake_case for variable and function names in Python.
4. Use PascalCase for class names in Python.
5. Use UPPER_CASE for constants in both JavaScript and Python.
6. Prefix private methods and variables with an underscore in both languages.

## File Naming

1. Use kebab-case for file names (e.g., `dark-mode.js`, `resize-handle.js`).
2. Use singular nouns for module names (e.g., `model.js`, not `models.js`).
3. Use `.js` extension for JavaScript files and `.py` for Python files.

## Code Structure

1. Group related functions and classes together in modules.
2. Use ES6 modules in JavaScript (import/export).
3. Follow the principle of least astonishment (POLA).

## JavaScript Specific

1. Use `const` for variables that won't be reassigned, `let` otherwise.
2. Avoid using `var`.
3. Use template literals for string interpolation.
4. Use arrow functions for short, non-method functions.
5. Use async/await for asynchronous operations.

## Python Specific

1. Follow PEP 8 style guide.
2. Use type hints where applicable.
3. Use f-strings for string interpolation.
4. Use list comprehensions and generator expressions when appropriate.

## HTML and CSS

1. Use semantic HTML elements.
2. Use kebab-case for CSS class names and IDs.
3. Use a consistent naming convention for CSS classes (e.g., BEM).

## Comments and Documentation

1. Use JSDoc for JavaScript function documentation.
2. Use docstrings for Python function and class documentation.
3. Keep comments up-to-date with code changes.
4. Write TODO comments for future improvements or known issues.

## Error Handling

1. Use try-catch blocks for error handling in JavaScript.
2. Use try-except blocks for error handling in Python.
3. Log errors appropriately.

## Testing

1. Write unit tests for all new functions and classes.
2. Aim for high test coverage.
3. Use descriptive names for test functions (e.g., `test_user_can_login`).

## Performance

1. Be mindful of performance implications, especially in loops or recursive functions.
2. Use appropriate data structures for the task at hand.

## Security

1. Never store sensitive information (like API keys) in the code.
2. Use environment variables for configuration.
3. Sanitize user inputs to prevent injection attacks.

Remember to follow these guidelines consistently across all components of the Gensei project. Regular code reviews can help ensure adherence to these conventions.