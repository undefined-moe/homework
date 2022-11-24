#include<iostream>
#include<stdexcept>
using namespace std;

template <class T>
class ArrayBasedList {
public:
    ArrayBasedList(int size) {
        this->size = size;
        this->arr = new T[size];
        this->length = 0;
    }

    int length;
    int size;

    auto insert(int index, T value) {
        if (index < 0 || index > length) {
            throw std::invalid_argument("Index out of bounds");
        }
        if (length == size) {
            throw std::invalid_argument("List is full");
        }
        for (int i = length; i > index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = value;
        length++;
        return this;
    }

    auto remove(int index) {
        if (index < 0 || index >= length) {
            throw std::invalid_argument("Index out of bounds");
        }
        for (int i = index; i < length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        length--;
        return this;
    }

    auto print() {
        for (int i = 0; i < length; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
        return this;
    }

    auto reverse() {
        for (int i = 0; i < length / 2; i++) {
            swap(arr[i], arr[length - i - 1]);
        }
        return this;
    }

    auto deleteElementsValueBetween(T min, T max) {
        int i = 0;
        while (i < length) {
            if (arr[i] >= min && arr[i] <= max) {
                remove(i);
            } else {
                i++;
            }
        }
        return this;
    }

private:
    T* arr;
};

int main() {
    auto list = new ArrayBasedList<int>(10);
    list->insert(0, 1)->insert(1, 2)->insert(2, 3)
        ->print()
        ->insert(1, 4)
        ->print()
        ->remove(0)
        ->print()
        ->reverse()
        ->print()
        ->deleteElementsValueBetween(2, 3)
        ->print();
    try {
        list->insert(100, 10);
    } catch (const std::invalid_argument& e) {
        // Should throw out of bounds exception
        cout << e.what() << endl;
    }
    try {
        for (int i : {1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
            list->insert(i, i);
    } catch (const std::invalid_argument& e) {
        // Should throw list is full exception
        cout << e.what() << endl;
    }
    return 0;
}