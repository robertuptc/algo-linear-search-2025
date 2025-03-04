def linear_search(value_to_find, array_to_search_through):
    answer = []

    for i, element in enumerate(array_to_search_through):
        # print(value_to_find, element, value_to_find == element)
        if value_to_find == element:
            answer.append(i)
    
    return answer if len(answer) else None

