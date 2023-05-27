AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spiderman",
          title: "Spider Man",
          url: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
        },
        {
          id: "superman",
          title: "Superman",
          url: "https://m.media-amazon.com/images/I/91jMqqELCyL.jpg",
        },
  
        {
          id: "batman",
          title: "Batman",
          url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Batman_Comic_Book_-_NARA_-_595420.gif",
        },
        {
          id: "venom",
          title: "Venom",
          url: "https://upload.wikimedia.org/wikipedia/en/8/86/Venom_Lethal_Protector_no_1.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
        
        // Thumbnail Element
        const thumbNail = this.createThumbnail(item);
        borderEl.appendChild(thumbNail)
       
        // Title Text Element
        const titleEl = this.createTitle(position, item)
        borderEl.appendChild(titleEl)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position, id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id", id)
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      })
      entityEl.setAttribute("position", position)
      entityEl.setAttribute("material", {color: "#0077CC", opacity: 1})
      entityEl.setAttribute("cursor-listener",{})
      return entityEl;
    },
    createThumbnail: function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {primitive: "circle", radius: 9})
      entityEl.setAttribute("material", {src: item.url})
      return entityEl;
    },
    createTitle: function(position, item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      const elPosition = position
      elPosition.y = -20
      entityEl.setAttribute("position", elPosition)
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#E65100",
        value: item.title
      })
      return entityEl;
    }
    
  });
  