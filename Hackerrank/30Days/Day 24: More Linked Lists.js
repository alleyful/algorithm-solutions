this.removeDuplicates = function (head) {
    var prev = head;
    while (prev) {
        var next = prev.next;
        if (next && prev.data == next.data) {
            prev.next = next.next;
        } else {
            prev = prev.next;
        }
    }
    return head;
}
