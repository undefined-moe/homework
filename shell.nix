{ pkgs ? import <nixpkgs> {} }:
let
in pkgs.stdenv.mkDerivation {
  name = "homework-workspace";
  buildInputs = [
    pkgs.nodejs
    pkgs.python3
    pkgs.python3Packages.autopep8
    pkgs.python3Packages.seaborn
    pkgs.python3Packages.pandas
    pkgs.python3Packages.numpy
    pkgs.python3Packages.ipykernel
    # For export to pdf
    pkgs.python3Packages.notebook
    pkgs.pandoc
    pkgs.texlive.combined.scheme-full
  ];
}