def length(l):
    if l==[]:
        return 0
    else:
        return 1 + length(l[1:])


def length2(sofar, l):
    if l==[]:
        return sofar
    else:
        return length2(sofar +1, l[1:])

def max2(bestsofar, l):
    if l==[]:
        return bestsofar
    else:
        if l[0] > bestsofar:
            newbest = l[0]
        else:
            newbest = bestsofar
        return max2(newbest, l[1:])

def maxoriginal(l):
    return max2(0,l)

    
print(length ([4,5,2,6,7]))
print(length2 (0,[4,5,2,6,7]))
print(max2(0, [4,5,2,6,7]))


