def binary_search(list, item):
  low = 0
  high = len(list) - 1

  while low <= high:
    mid = int((low + high) / 2)
    guess = list[mid]
    if guess == item:
      print(mid)
      return
    if guess > item:
      high = mid - 1;
    else:
      low = mid + 1
  print('没有结果')
  return None

my_list = [1, 3, 5, 7, 9]

binary_search(my_list, 3)