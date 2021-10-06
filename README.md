## Algorithm - Find path of JSON object

- Step 1: Start and copy the obj in a new obj variable
- Step 2: Split the keys and put into an keys array
- Step 3: Loop through the keys’ array and for each element in array follow steps 4 to 9
- Step 4: In the object variable pickup each root node and find if the root node element == key
- Step 5: If condition in step 4 is true go to step 6 else go to step 8
- Step 6: Print all the sub nodes by stringify them
- Step 7: Go to step 11
- Step 8: put all the sub nodes of root node in object variable
- Step 9: Go to step 3
- Step 10: Print "undefined"
- Step 11: End

