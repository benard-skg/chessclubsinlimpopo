import react from "react";

export default function ArticlePage({ id, headline, description, author, imageMain, imageContent,imageContentDescription }){

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h3>{id}</h3>
      <h1 className="text-3xl font-bold mb-4 leading-tight tracking-tightest">{headline}</h1>

      <div className="mb-4">
        <img
          className="w-full h-72 object-fit lg:h-96 mb-2"
          src={`../../${imageMain}`} // Replace with the actual image path
          alt="Image Main"
        />
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold">Author: {author}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          ultrices bibendum arcu sit amet cursus. Fusce nec ipsum sem. Aenean
          tempus varius luctus. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Phasellus ornare
          maximus odio et lobortis. 
          <br/>
          <br/>
          Maecenas viverra dolor vitae ornare blandit.
          Proin aliquet porttitor diam, sit amet ultricies nisi congue vitae.
          Aliquam erat volutpat. Donec vitae nisi sed nunc faucibus sollicitudin
          sit amet vitae dolor. Donec gravida vulputate nibh, a suscipit elit
          placerat id. Aliquam vulputate urna non risus fringilla rhoncus sit
          amet ut quam. Suspendisse porta neque vitae est rutrum, nec tempor
          nisl tincidunt. Suspendisse convallis eleifend metus, sed pellentesque
          ante convallis eu. Duis porttitor posuere dictum. Suspendisse erat
          urna, interdum at vehicula sit amet, commodo eu urna. Nulla dignissim
          urna nec dui fringilla, eget aliquam sem sollicitudin. Etiam a elit id
          nulla pulvinar auctor. Suspendisse potenti. Praesent vulputate blandit
          velit eget facilisis. Praesent in fermentum lacus. Donec volutpat
          metus elit, quis feugiat nisl blandit nec. In in enim vel turpis
          consectetur commodo ut a turpis. Morbi rutrum felis hendrerit dui
          convallis ultricies. Mauris finibus purus vel malesuada congue.
          Pellentesque tristique dolor scelerisque est molestie, non suscipit
          arcu ornare. Cras quis vehicula massa. Morbi consectetur ligula nec
          augue tristique, sed consectetur ex blandit. Praesent eget viverra
          nisl, sed congue nibh. Morbi leo libero, congue vitae odio vel,
          finibus iaculis libero. Nulla vel nibh vel metus ultrices pellentesque
          ac quis sem. Proin varius, felis sit amet elementum finibus, nulla
          odio ornare lectus, in volutpat lacus eros eu nisi. Nunc aliquam, urna
          eu aliquet vulputate, risus neque congue justo, nec aliquam felis erat
          quis leo. Praesent at convallis enim, et vehicula ipsum. Nullam lacus
          mauris, tincidunt id nibh rutrum, tempus accumsan justo. Integer
          venenatis semper dui sed feugiat. Ut risus tellus, dictum eget dolor
          non, pharetra ullamcorper lorem. Nunc ullamcorper aliquet massa
          elementum malesuada. 
          <br/>
          <br/>

          <div className="mb-4">
        <img
          className="w-full h-72 object-fit lg:h-96 mb-2"
          src={`../../${imageContent}`} // Replace with the actual image path
          alt="Image Content"
        />
        <p className="text-sm text-gray-500">{imageContentDescription}</p>
      </div>

          Ut vel turpis sagittis, eleifend sem at, pretium
          ipsum. Fusce consectetur ipsum eu diam aliquam, in tincidunt orci
          auctor. Vestibulum eget tortor vel libero semper volutpat eu vitae
          purus. Donec nibh diam, commodo eget fringilla quis, tincidunt sed
          nisl. Nulla eu ullamcorper eros. Ut mattis tristique libero id
          condimentum. Duis imperdiet egestas quam sit amet pellentesque.
          Curabitur in neque non magna interdum fringilla. Vestibulum euismod
          ornare mi sed pulvinar. Ut viverra ante ac erat finibus bibendum. Nam
          posuere massa sed interdum pulvinar. Donec ornare, nisi a egestas
          posuere, elit tortor tempor sem, in rutrum odio sapien ullamcorper
          risus. Aliquam viverra lectus vitae dui tincidunt, eget condimentum
          enim ornare. Maecenas eget lacinia ligula. Aenean cursus ut est non
          viverra. Phasellus non lobortis orci. Proin nisi libero, luctus in
          eros vel, tincidunt semper sapien. Nulla eu metus ac eros mollis
          laoreet. Nulla eget nulla iaculis, imperdiet odio ullamcorper,
          convallis ipsum. Ut a turpis diam. Nulla facilisi. Nullam sed lectus
          sit amet eros porta convallis id viverra felis. Aliquam turpis nulla,
          cursus a finibus at, consectetur et nibh. Aenean mauris tellus, luctus
          nec lobortis at, viverra vitae erat. Vestibulum sollicitudin sagittis
          turpis in imperdiet. Phasellus commodo rhoncus mi, sed interdum justo
          faucibus a. Cras nec viverra eros. Donec tempus, enim sit amet
          porttitor pharetra, lacus libero mattis felis, suscipit ultricies
          purus tortor ut justo.
        </p>
      </div>

      {/* Additional content can be added here as needed */}
    </div>
    )
}