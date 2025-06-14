interface Profile {
  id: string;
  email?: string;
}

interface ProfileIterator {
  getNext(): Profile | null;
  hasMore(): boolean;
}

interface SocialNetwork {
  createFriendIterator(profileId: string): ProfileIterator;
  createCoworkerIterator(profileId: string): ProfileIterator;
}

class Facebook implements SocialNetwork {
  private profiles: Profile[];

  constructor(profiles: Profile[]) {
    this.profiles = profiles;
  }

  createFriendIterator(profileId: string): ProfileIterator {
    return new FacebookIterator(this.profiles, "friend");
  }

  createCoworkerIterator(profileId: string): ProfileIterator {
    return new FacebookIterator(this.profiles, "coworker");
  }
}

class FacebookIterator implements ProfileIterator {
  private cache: Profile[];
  private currentIndex: number;

  constructor(profiles: Profile[], type: string) {
    // Podrías filtrar aquí según tipo si tuvieras datos más completos
    this.cache = profiles;
    this.currentIndex = 0;
  }

  getNext(): Profile | null {
    if (this.hasMore()) {
      return this.cache[this.currentIndex++];
    }
    return null;
  }

  hasMore(): boolean {
    return this.currentIndex < this.cache.length;
  }
}

class SocialSpammer {
  send(iterator: ProfileIterator, message: string) {
    while (iterator.hasMore()) {
      const profile = iterator.getNext();
      if (profile) {
        this.sendMessage(profile, message);
      }
    }
  }

  private sendMessage(profile: Profile, message: string) {
    console.log(`Sending message to ${profile.email}: ${message}`);
  }
}

class App {
  private network: SocialNetwork;
  private spammer: SocialSpammer;

  constructor(network: SocialNetwork, spammer: SocialSpammer) {
    this.network = network;
    this.spammer = spammer;
  }

  sendToFriends(profileId: string, message: string) {
    const iterator = this.network.createFriendIterator(profileId);
    this.spammer.send(iterator, message);
  }

  sendToCoworkers(profileId: string, message: string) {
    const iterator = this.network.createCoworkerIterator(profileId);
    this.spammer.send(iterator, message);
  }
}

// Ejemplo de uso:
function runExample() {
  const profiles: Profile[] = [
    { id: "1", email: "uno@correo.com" },
    { id: "2", email: "dos@correo.com" },
  ];

  const facebook = new Facebook(profiles);
  const spammer = new SocialSpammer();
  const socialApp = new App(facebook, spammer);

  socialApp.sendToFriends("1", "¡Hola amigo!");
}

runExample();
