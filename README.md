# Simpsonify
Provides generic and customisable user test data with a Simpson twist

User properties:
- `firstName`: string - User first name
- `lastName`: string - User last name
- `email`: string - User email in valid format
- `avatarUrl`: string - Valid url to user avatar

## Available Methods
__`getUsers`__

Parameters:
 - `count`: desired number of user results returned
 - `customProps`: array of additional properties for each user. Each property object includes the property name and an array of possible values to be randomly selected from
 
 ### Example
 
 ```
 const props = [
    {
      name: 'occupation',
      values: ['Developer', 'Engineer', 'Teacher', 'Doctor']
    },
    {
      name: 'nationality'.
      values: ['New Zealand', 'Australia', 'Canada', 'Japan', 'Germany']
    }
 ];
 getUsers(5, props);
 ```

### Returns

```
[
   {
      firstName: 'Homer',
      lastName: 'Simpson',
      email: 'homer.simpson@springfield.com',
      avatarUrl: 'https://goo.gl/VBV6pj'
   },
   {
      firstName: 'Marge',
      lastName: 'Simpson',
      email: 'marge.simpson@springfield.com',
      avatarUrl: 'https://goo.gl/ULr95z'
   }
]
```
