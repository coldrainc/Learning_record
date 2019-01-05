#include<iostream>
using namespace std;

int main() {
  cin>>n>>m;
  int arr[n];
  int count = 0, score = 0;
  for(int i = 1; i <= m; i++) {
    cin>>x;
    for(int j = 1; j <= n; j++) {
      if(x == j){
        arr[j]++
      }
    }
  }
  for(int t = 1; t <= n;t++){
    if(arr[t] == 0) {
      cout<<score;
      return;
    }
    if(count % n == 0 && count != 0){
      score++;
    }
    if(arr[t] != 0){
      count++;
      arr[t] = arr[t] - 1;
    }
  }
}