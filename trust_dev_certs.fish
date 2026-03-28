#!/usr/bin/env fish

set -x SSL_CERT_DIR "$HOME/.aspnet/dev-certs/trust"

dotnet dev-certs https --trust