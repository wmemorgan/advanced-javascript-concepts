# Javascript Foundation

## Execution Context
```javascript
    function printName() {
        return 'George Kaplan'
    }

    function findName() {
        return printName()
    }

    function sayMyName() {
        return findName()
    }

    sayMyName()
```