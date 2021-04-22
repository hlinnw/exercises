//Lab4-Golf
// Hui Lin
// April 21, 2021
#include <iostream>
#include <string>
#include <iomanip>
#include <vector>


using namespace std;

const int NUM_PLAYERS = 3;
const int NUM_DAYS = 7;

void scoreKeep(int[][NUM_DAYS], string[]);//prototype of function scoreKeep();
void printContents(const int[][NUM_DAYS], const string[]);// prototype of function printContents
void calAvg(const int[][NUM_DAYS], const string[]); // prototype of function calcAvg
void minScore(const int[][NUM_DAYS], const string[]);//prototype of function minScore
void maxScore(const int[][NUM_DAYS], const string[]);//prototype of function maxScore
void lowestScoreCount(const int[][NUM_DAYS], const string[]);

int main() {
	cout << fixed << setprecision(2);
	string names[NUM_PLAYERS] = {"none", "none", "none"}; //array of size NUM_PLAYERS to hold player names 
	int allScores[NUM_PLAYERS][NUM_DAYS] = { 0 };//Declare the two-dimensional array using 0 as the initial values for all 21 days.
	
	
	scoreKeep(allScores, names);
	printContents(allScores, names);
	calAvg(allScores, names);
	minScore(allScores, names);
	maxScore(allScores, names);
	lowestScoreCount(allScores, names);
		

	return 0;
	}
	

void scoreKeep(int allScores[][NUM_DAYS], string names[] ) {//a function and use a loop to ask the user for the player names and the score of each player for the seven days.
	for (int i = 0; i < NUM_PLAYERS; i++) {
		cout <<"Enter the name of the player: ";
		getline(cin, names[i]);
		for (int k = 0; k < NUM_DAYS; k++) {
			do {
				cout << "Enter the number of shots for " << names[i] << " on day " << k + 1 << ": ";
				cin >> allScores[i][k];
				if (allScores[i][k] < 0) {
					cout << "Invalid entry. Scores must not be negative." << endl;
				}
			} while (allScores[i][k] < 0);

		} 
		cout << endl;
		cin.ignore();
	}

}

	
//Create a function that prints the contents of the two arrays in this format:
void printContents(const int allScores[][NUM_DAYS], const string names[]) {
	cout << "Name" << setw(19) ;
	for (int j = 1; j <= NUM_DAYS; j++) {
		cout << "Day " << j << setw(10);
	}
	cout << endl;
	for (int i = 0; i < NUM_PLAYERS; i++) {
		cout << names[i] << setw(12) << right;
		for (int k = 0; k < NUM_DAYS; k++) {
			cout << allScores[i][k] << setw(10);
		}
		cout << endl;

	}

}
//Create a function that calculates and displays the average score for each player over the seven days
void calAvg(const int allScores[][NUM_DAYS], const string names[]) {
	int sum = 0;// declare and initialize a counter
	cout << endl;
	cout << "Name" << setw(24) << "Average Score" << endl;
	for (int i = 0; i < NUM_PLAYERS; i++) {
		for (int k = 0; k < NUM_DAYS; k++) {
			sum += allScores[i][k];
		
		}
		double average = static_cast<double>(sum) / NUM_DAYS;
		
		cout << names[i] << setw(17) << average << endl;
		sum = 0;// reset the counter to 0;
	}

	
}
//Create a function that determines the one player who shot the lowest score on a given day.  
void minScore(const int allScores[][NUM_DAYS], const string names[]) {
	int minScore = allScores[0][0];// declare and initialize a variable for lowest score
	int minDay = 1;//declare and initialize a variable for the day the lowest score is found
	string player = "none"; //declare and initialize a variable for the player who has the lowest score
	for (int i = 0; i < NUM_PLAYERS; i++) {
		
		for (int k = 0; k < NUM_DAYS; k++) {
			if (minScore > allScores[i][k]) {
				minScore = allScores[i][k];
				minDay = k;
				player = names[i];
			
			}
			
		}
		
	}
	cout << endl;
	cout << "Player " << player << " shot the lowest score, " << minScore << ", on day " << minDay + 1 << endl;
	
}

//Create a function that determines the one player shot the highest score on a given day.
void maxScore(const int allScores[][NUM_DAYS], const string names[]) {
	int maxScore = allScores[0][0];// declare and initialize a variable for highest score
	int maxDay = 1;//declare and initialize a variable for the day the highest score is found
	string player = "none"; //declare and initialize a variable for the player who has the highest score
	for (int i = 0; i < NUM_PLAYERS; i++) {

		for (int k = 0; k < NUM_DAYS; k++) {
			if (maxScore < allScores[i][k]) {
				maxScore = allScores[i][k];
				maxDay = k;
				player = names[i];

			}

		}

	}
	cout << endl;
	cout << "Player " << player << " shot the highest score, " << maxScore << ", on day " << maxDay + 1 << endl;

}
//Create a function that displays the player who won the tournament.  
void lowestScoreCount(const int allScores[][NUM_DAYS], const string names[]) {
	int minTemp = 0;// declare and initialize a variable for lowest score every day
	int player1 = 0;//declare and initialize a variable to get player1's daily score
	int player2 = 0;//declare and initialize a variable to get player2's daily score
	int player3 = 0;//declare and initialize a variable to get player3's daily score
	int counterP1 = 0;//declare and initialize a variable to count the days player1 has the lowest daily score
	int counterP2 = 0;//declare and initialize a variable to count the days player2 has the lowest daily score
	int counterP3 = 0;//declare and initialize a variable to count the days player3 has the lowest daily score


	for (int i = 0; i < NUM_DAYS; i++) {
			player1 = allScores[0][i];
			player2 = allScores[1][i];
			player3 = allScores[2][i];
			minTemp = player1;
			if (minTemp > player2) {
				minTemp = player2;
				if (minTemp > player3) {
					minTemp = player3;
				}
			}
			else if (minTemp > player3) {
				minTemp = player3;
			}
			if (minTemp == player1) {
				counterP1++;
			}
			if (minTemp == player2) {
				counterP2++;
			}
			if (minTemp == player3) {
				counterP3++;
			}

	}
	int counterMax = counterP1;
	if (counterMax < counterP2) {
		counterMax = counterP2;
		if (counterMax < counterP3) {
			counterMax = counterP3;
			
		}
	}
	else if (counterMax < counterP3) {
		counterMax = counterP3;
	}
	if (counterMax == counterP1) {
		cout << endl;
		cout << "Player " << names[0] << " won the tournment with, " << counterP1 << " wins! " << endl;
	}
	if (counterMax == counterP2) {
		cout << endl;
		cout << "Player " << names[1] << " won the tournment with, " << counterP2 << " wins! " << endl;
	}
	if (counterMax == counterP3) {
		cout << endl;
		cout << "Player " << names[2] << " won the tournment with, " << counterP3 << " wins! " << endl;
	}


	
	
}