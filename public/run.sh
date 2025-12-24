#!/bin/sh
set -e

TMP_DIR="$(mktemp -d)"
BIN="$TMP_DIR/raunak-tui"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

OS="$(uname -s)"
ARCH="$(uname -m)"

if [ "$OS" = "Darwin" ] && [ "$ARCH" = "arm64" ]; then
  URL="https://github.com/RaunakDiesFromCode/raunak-tui/releases/download/v1.0.0/raunak-tui-macos-arm64"
elif [ "$OS" = "Darwin" ]; then
  URL="https://github.com/RaunakDiesFromCode/raunak-tui/releases/download/v1.0.0/raunak-tui-macos-x86_64"
else
  URL="https://github.com/RaunakDiesFromCode/raunak-tui/releases/download/v1.0.0/raunak-tui-linux-x86_64"
fi

echo "Downloading temporary binary…"
curl -fsSL "$URL" -o "$BIN"
chmod +x "$BIN"

# 🔑 THIS LINE FIXES IT
exec </dev/tty >/dev/tty 2>/dev/tty "$BIN"
