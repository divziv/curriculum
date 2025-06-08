/*
Return the length of the longest word in the provided sentence.
Your output should be a number.

Examples:
findLongestWordLength("The quick brown fox jumped over the lazy dog") ---> 6
findLongestWordLength("May the force be with you") ---> 5
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") ---> 19

*/

/*C++ Solution*/

#include <stdio.h>
#include <sstream>
#include <string.h>
using namespace std;

int findLongestWordLength(const string& sentence) 
{
    istringstream ss(sentence);
    string word;
    int maxLength = 0;

    while(iss >> word) 
    {
        if(word.length() > maxLength) 
        {
            maxLength = word.length();
        }
    }

    return maxLength;
}

int main()
{
  string input;
  
  cout << "Enter a sentence:\n";
  getline(cin, input);
  
  int longest = findLongestWordLength(input);
  cout << "Length of the longest word: " << longest << "\n";
    
  return 0;
}
