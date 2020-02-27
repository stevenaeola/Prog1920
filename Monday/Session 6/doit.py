book1 = ["in the beginning", "there was another page", "the last page"]
book2 = ["start", "middle", "end"]

def readBook (pages):
    for i in range(len(pages)):
        print (pages[i])

def readRec (pages):
    if len(pages) >0:
        print(pages[0])
        readRec(pages[1:])
        
readBook(book1)
    
readRec(book2)
