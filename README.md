# Simpsonify
Provides generic and customisable user test data with a Simpson twist


### Available Methods
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
