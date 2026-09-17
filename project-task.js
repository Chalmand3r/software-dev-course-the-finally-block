/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) { // Simulated file processing function
  try 
  {
    if(!fileName)
      throw new Error("File name is required"); // Custom exception for missing file name
    if(fileData == "")
      throw new Error("File data cannot be empty"); // Custom exception for empty file data
     if(typeof fileData !== "string") 
    throw new TypeError("File data must be a string"); // Custom exception for non-string file data

  } catch(err) {
       console.log("error:", err.message); // Log the error message
  }
finally{
  console.log(fileName, fileData); // Log the file name and data, even if an error occurred
  console.log("Cleaning up resources..."); // Simulated resource cleanup
}
}

  
    // TODO: Add input validation here
    
    // TODO: Implement simulated file processing here
    
    // TODO: Add simulated file operations (reading/writing)
    
    // TODO: Implement error handling
    
  // TODO: Implement a finally block to close resources

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
