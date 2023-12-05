export class Doc {
    id: string;
    name: string;
    type: 'PDF' | 'TXT' | 'XDOC';
    description: string | null;
  
    constructor(id: string, name: string, type: 'PDF' | 'TXT' | 'XDOC', description: string | null) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.description = description;
    }
  }
