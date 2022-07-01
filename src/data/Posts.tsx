type PostsType = {
  id: number,
  src: string,
  alt: string,
  category: string,
  title: string,
  content: string,
}

const Posts: PostsType[] = [
  {
    id: 1001,
    src: "https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: 'Lewis Hamilton in his car',
    category: "NEWS",
    title: `AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus faucibus felis, ac faucibus odio pharetra sed. Etiam sed mauris aliquam, venenatis quam at, pellentesque nulla. Aenean placerat tincidunt nisl at interdum. Cras facilisis ut risus vel lacinia. Suspendisse iaculis mi vitae lacus blandit, ut posuere turpis placerat. Donec tellus augue, pellentesque nec posuere non, volutpat ac massa. Mauris euismod nisi in augue venenatis interdum. Donec sed mauris non ipsum consequat tempor. Nullam in semper nisl. Vivamus maximus bibendum placerat. Nunc quis aliquam tellus, non ultrices neque. Sed in maximus ligula, eget tincidunt felis. Duis ut luctus sapien. Nullam venenatis est sed neque vestibulum, sit amet viverra elit scelerisque. Nam volutpat lectus eget ipsum feugiat feugiat.

        Donec molestie velit sed gravida semper. Curabitur venenatis massa eu fermentum egestas. Morbi eget mauris sed mi tempus tristique. Aenean scelerisque sit amet nisi eget blandit. Aenean molestie semper aliquam. Donec cursus ultricies nisi id placerat. Etiam aliquam imperdiet felis nec convallis. Nam sed tellus eget elit vestibulum sollicitudin. Praesent tincidunt magna eu ante molestie, eget congue lorem gravida. Proin eleifend augue lectus, rhoncus efficitur risus gravida id. Nullam sagittis faucibus laoreet.
        
        Sed interdum, turpis at convallis aliquet, mauris tellus scelerisque dui, eget consectetur tortor elit consectetur nisi. Suspendisse accumsan ipsum nunc, tempor eleifend eros dictum nec. Vestibulum et libero a felis egestas ornare et in nulla. Fusce laoreet felis quis erat sollicitudin porta. Nullam in elementum turpis, sit amet sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id accumsan diam, vel dignissim nunc. Aliquam pulvinar rhoncus nulla tincidunt pharetra. Integer fringilla arcu vel velit fringilla commodo.
        
        In vehicula ipsum nibh, nec lobortis ex sodales non. Nunc ut dui urna. Nam accumsan mi eget mauris cursus, vitae fermentum purus luctus. Vivamus malesuada arcu sed nisl tincidunt pulvinar. Nullam posuere, lacus at fringilla tempor, orci mauris cursus risus, quis maximus purus tortor vel elit. Mauris at blandit tellus. In et magna ex. Vestibulum a sem et nunc venenatis mattis. Curabitur in ultricies justo. Nullam id tortor et enim sodales iaculis. Nullam sem nisl, tempor sed lorem vel, ultrices tincidunt massa.`,
  },
  {
    id: 1002,
    src: "https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: 'Lewis Hamilton in his car',
    category: "NEWS",
    title: `AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus faucibus felis, ac faucibus odio pharetra sed. Etiam sed mauris aliquam, venenatis quam at, pellentesque nulla. Aenean placerat tincidunt nisl at interdum. Cras facilisis ut risus vel lacinia. Suspendisse iaculis mi vitae lacus blandit, ut posuere turpis placerat. Donec tellus augue, pellentesque nec posuere non, volutpat ac massa. Mauris euismod nisi in augue venenatis interdum. Donec sed mauris non ipsum consequat tempor. Nullam in semper nisl. Vivamus maximus bibendum placerat. Nunc quis aliquam tellus, non ultrices neque. Sed in maximus ligula, eget tincidunt felis. Duis ut luctus sapien. Nullam venenatis est sed neque vestibulum, sit amet viverra elit scelerisque. Nam volutpat lectus eget ipsum feugiat feugiat.

        Donec molestie velit sed gravida semper. Curabitur venenatis massa eu fermentum egestas. Morbi eget mauris sed mi tempus tristique. Aenean scelerisque sit amet nisi eget blandit. Aenean molestie semper aliquam. Donec cursus ultricies nisi id placerat. Etiam aliquam imperdiet felis nec convallis. Nam sed tellus eget elit vestibulum sollicitudin. Praesent tincidunt magna eu ante molestie, eget congue lorem gravida. Proin eleifend augue lectus, rhoncus efficitur risus gravida id. Nullam sagittis faucibus laoreet.
        
        Sed interdum, turpis at convallis aliquet, mauris tellus scelerisque dui, eget consectetur tortor elit consectetur nisi. Suspendisse accumsan ipsum nunc, tempor eleifend eros dictum nec. Vestibulum et libero a felis egestas ornare et in nulla. Fusce laoreet felis quis erat sollicitudin porta. Nullam in elementum turpis, sit amet sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id accumsan diam, vel dignissim nunc. Aliquam pulvinar rhoncus nulla tincidunt pharetra. Integer fringilla arcu vel velit fringilla commodo.
        
        In vehicula ipsum nibh, nec lobortis ex sodales non. Nunc ut dui urna. Nam accumsan mi eget mauris cursus, vitae fermentum purus luctus. Vivamus malesuada arcu sed nisl tincidunt pulvinar. Nullam posuere, lacus at fringilla tempor, orci mauris cursus risus, quis maximus purus tortor vel elit. Mauris at blandit tellus. In et magna ex. Vestibulum a sem et nunc venenatis mattis. Curabitur in ultricies justo. Nullam id tortor et enim sodales iaculis. Nullam sem nisl, tempor sed lorem vel, ultrices tincidunt massa.`,
  },
  {
    id: 1003,
    src: "https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: 'Lewis Hamilton in his car',
    category: "NEWS",
    title: `AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus faucibus felis, ac faucibus odio pharetra sed. Etiam sed mauris aliquam, venenatis quam at, pellentesque nulla. Aenean placerat tincidunt nisl at interdum. Cras facilisis ut risus vel lacinia. Suspendisse iaculis mi vitae lacus blandit, ut posuere turpis placerat. Donec tellus augue, pellentesque nec posuere non, volutpat ac massa. Mauris euismod nisi in augue venenatis interdum. Donec sed mauris non ipsum consequat tempor. Nullam in semper nisl. Vivamus maximus bibendum placerat. Nunc quis aliquam tellus, non ultrices neque. Sed in maximus ligula, eget tincidunt felis. Duis ut luctus sapien. Nullam venenatis est sed neque vestibulum, sit amet viverra elit scelerisque. Nam volutpat lectus eget ipsum feugiat feugiat.

        Donec molestie velit sed gravida semper. Curabitur venenatis massa eu fermentum egestas. Morbi eget mauris sed mi tempus tristique. Aenean scelerisque sit amet nisi eget blandit. Aenean molestie semper aliquam. Donec cursus ultricies nisi id placerat. Etiam aliquam imperdiet felis nec convallis. Nam sed tellus eget elit vestibulum sollicitudin. Praesent tincidunt magna eu ante molestie, eget congue lorem gravida. Proin eleifend augue lectus, rhoncus efficitur risus gravida id. Nullam sagittis faucibus laoreet.
        
        Sed interdum, turpis at convallis aliquet, mauris tellus scelerisque dui, eget consectetur tortor elit consectetur nisi. Suspendisse accumsan ipsum nunc, tempor eleifend eros dictum nec. Vestibulum et libero a felis egestas ornare et in nulla. Fusce laoreet felis quis erat sollicitudin porta. Nullam in elementum turpis, sit amet sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id accumsan diam, vel dignissim nunc. Aliquam pulvinar rhoncus nulla tincidunt pharetra. Integer fringilla arcu vel velit fringilla commodo.
        
        In vehicula ipsum nibh, nec lobortis ex sodales non. Nunc ut dui urna. Nam accumsan mi eget mauris cursus, vitae fermentum purus luctus. Vivamus malesuada arcu sed nisl tincidunt pulvinar. Nullam posuere, lacus at fringilla tempor, orci mauris cursus risus, quis maximus purus tortor vel elit. Mauris at blandit tellus. In et magna ex. Vestibulum a sem et nunc venenatis mattis. Curabitur in ultricies justo. Nullam id tortor et enim sodales iaculis. Nullam sem nisl, tempor sed lorem vel, ultrices tincidunt massa.`,
  },
  {
    id: 1004,
    src: "https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: 'Lewis Hamilton in his car',
    category: "NEWS",
    title: `AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus faucibus felis, ac faucibus odio pharetra sed. Etiam sed mauris aliquam, venenatis quam at, pellentesque nulla. Aenean placerat tincidunt nisl at interdum. Cras facilisis ut risus vel lacinia. Suspendisse iaculis mi vitae lacus blandit, ut posuere turpis placerat. Donec tellus augue, pellentesque nec posuere non, volutpat ac massa. Mauris euismod nisi in augue venenatis interdum. Donec sed mauris non ipsum consequat tempor. Nullam in semper nisl. Vivamus maximus bibendum placerat. Nunc quis aliquam tellus, non ultrices neque. Sed in maximus ligula, eget tincidunt felis. Duis ut luctus sapien. Nullam venenatis est sed neque vestibulum, sit amet viverra elit scelerisque. Nam volutpat lectus eget ipsum feugiat feugiat.

        Donec molestie velit sed gravida semper. Curabitur venenatis massa eu fermentum egestas. Morbi eget mauris sed mi tempus tristique. Aenean scelerisque sit amet nisi eget blandit. Aenean molestie semper aliquam. Donec cursus ultricies nisi id placerat. Etiam aliquam imperdiet felis nec convallis. Nam sed tellus eget elit vestibulum sollicitudin. Praesent tincidunt magna eu ante molestie, eget congue lorem gravida. Proin eleifend augue lectus, rhoncus efficitur risus gravida id. Nullam sagittis faucibus laoreet.
        
        Sed interdum, turpis at convallis aliquet, mauris tellus scelerisque dui, eget consectetur tortor elit consectetur nisi. Suspendisse accumsan ipsum nunc, tempor eleifend eros dictum nec. Vestibulum et libero a felis egestas ornare et in nulla. Fusce laoreet felis quis erat sollicitudin porta. Nullam in elementum turpis, sit amet sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id accumsan diam, vel dignissim nunc. Aliquam pulvinar rhoncus nulla tincidunt pharetra. Integer fringilla arcu vel velit fringilla commodo.
        
        In vehicula ipsum nibh, nec lobortis ex sodales non. Nunc ut dui urna. Nam accumsan mi eget mauris cursus, vitae fermentum purus luctus. Vivamus malesuada arcu sed nisl tincidunt pulvinar. Nullam posuere, lacus at fringilla tempor, orci mauris cursus risus, quis maximus purus tortor vel elit. Mauris at blandit tellus. In et magna ex. Vestibulum a sem et nunc venenatis mattis. Curabitur in ultricies justo. Nullam id tortor et enim sodales iaculis. Nullam sem nisl, tempor sed lorem vel, ultrices tincidunt massa.`,
  },
  {
    id: 1005,
    src: "https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: 'Lewis Hamilton in his car',
    category: "NEWS",
    title: `AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus faucibus felis, ac faucibus odio pharetra sed. Etiam sed mauris aliquam, venenatis quam at, pellentesque nulla. Aenean placerat tincidunt nisl at interdum. Cras facilisis ut risus vel lacinia. Suspendisse iaculis mi vitae lacus blandit, ut posuere turpis placerat. Donec tellus augue, pellentesque nec posuere non, volutpat ac massa. Mauris euismod nisi in augue venenatis interdum. Donec sed mauris non ipsum consequat tempor. Nullam in semper nisl. Vivamus maximus bibendum placerat. Nunc quis aliquam tellus, non ultrices neque. Sed in maximus ligula, eget tincidunt felis. Duis ut luctus sapien. Nullam venenatis est sed neque vestibulum, sit amet viverra elit scelerisque. Nam volutpat lectus eget ipsum feugiat feugiat.

        Donec molestie velit sed gravida semper. Curabitur venenatis massa eu fermentum egestas. Morbi eget mauris sed mi tempus tristique. Aenean scelerisque sit amet nisi eget blandit. Aenean molestie semper aliquam. Donec cursus ultricies nisi id placerat. Etiam aliquam imperdiet felis nec convallis. Nam sed tellus eget elit vestibulum sollicitudin. Praesent tincidunt magna eu ante molestie, eget congue lorem gravida. Proin eleifend augue lectus, rhoncus efficitur risus gravida id. Nullam sagittis faucibus laoreet.
        
        Sed interdum, turpis at convallis aliquet, mauris tellus scelerisque dui, eget consectetur tortor elit consectetur nisi. Suspendisse accumsan ipsum nunc, tempor eleifend eros dictum nec. Vestibulum et libero a felis egestas ornare et in nulla. Fusce laoreet felis quis erat sollicitudin porta. Nullam in elementum turpis, sit amet sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id accumsan diam, vel dignissim nunc. Aliquam pulvinar rhoncus nulla tincidunt pharetra. Integer fringilla arcu vel velit fringilla commodo.
        
        In vehicula ipsum nibh, nec lobortis ex sodales non. Nunc ut dui urna. Nam accumsan mi eget mauris cursus, vitae fermentum purus luctus. Vivamus malesuada arcu sed nisl tincidunt pulvinar. Nullam posuere, lacus at fringilla tempor, orci mauris cursus risus, quis maximus purus tortor vel elit. Mauris at blandit tellus. In et magna ex. Vestibulum a sem et nunc venenatis mattis. Curabitur in ultricies justo. Nullam id tortor et enim sodales iaculis. Nullam sem nisl, tempor sed lorem vel, ultrices tincidunt massa.`,
  },
];

export default Posts;
