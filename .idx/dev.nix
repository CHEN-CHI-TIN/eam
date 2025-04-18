# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.docker-compose
    # pkgs.go
    # pkgs.nodePackages.nodemon
  ];
  services.docker.enable = true;
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "ms-python.python"
      "ms-python.isort"
      "charliermarsh.ruff"
      "ms-python.black-formatter"
      "enkia.tokyo-night"
    ];
    # Enable previews
    # previews = {
    #   # enable = true;
    #   previews = {
    #     web = {
    #       # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
    #       # and show it in IDX's web preview panel
    #       command = ["docker" "compose" "up" "--build" "-d"];
    #       manager = "container";
    #       env = {
    #         # Environment variables to set for your server
    #         PORT = "3001";
    #       };
    #     };
    #   };
    # };   
    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
        # npm-install = "npm install";
        # Open editors for the following files by default, if they exist:
        default.openFiles = [ "README.md" ];
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
        entrypoint = "docker compose up --build -d";
      };
    };
  };
}
